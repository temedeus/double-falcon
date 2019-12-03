#include "duplicatefinderwrapper.h"

Napi::FunctionReference DuplicateFinderWrapper::constructor;

Napi::Object DuplicateFinderWrapper::Init(Napi::Env env, Napi::Object exports)
{
    Napi::HandleScope scope(env);

    Napi::Function func = DefineClass(env, "DuplicateFinderWrapper",
                                      {
                                          InstanceMethod("scan", &DuplicateFinderWrapper::Scan),
                                          InstanceMethod("deleteFile", &DuplicateFinderWrapper::DeleteFile),
                                          InstanceMethod("clear", &DuplicateFinderWrapper::Clear),
                                      });

    constructor = Napi::Persistent(func);

    constructor.SuppressDestruct();

    exports.Set("DuplicateFinderWrapper", func);
    return exports;
}

/**
 * N-API wrapping for DuplicateFinder constructor.
 */
DuplicateFinderWrapper::DuplicateFinderWrapper(const Napi::CallbackInfo &info) : Napi::ObjectWrap<DuplicateFinderWrapper>(info)
{
    Napi::Env env = info.Env();
    Napi::HandleScope scope(env);

    int length = info.Length();
    if (length != 1)
    {
        Napi::TypeError::New(env, "Path string expected").ThrowAsJavaScriptException();
    }

    Napi::String value = info[0].As<Napi::String>();
    this->duplicateFinder_ = new DuplicateFinder(value);
}

/**
 * N-API wrapping for DuplicateFinder::scan. Also wraps results in Napi::Object that can be used
 * JavaScript side.
 */
Napi::Value DuplicateFinderWrapper::Scan(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::HandleScope scope(env);

    bool success = this->duplicateFinder_->scan();

    Napi::Object obj = Napi::Object::New(env);

    if (success)
    {

        std::unordered_map<std::string, std::set<std::string>> duplicates;
        duplicates = this->duplicateFinder_->getResults();

        // Following could likely be handled more efficiently.
        for (auto &x : duplicates)
        {
            Napi::Array array = Napi::Array::New(env);
            int counter = 0;
            for (auto &y : x.second)
            {
                array.Set(counter++, y);
            }

            obj.Set(x.first, array);
        }
    }

    return obj;
}

/**
 * N-API wrapping for DuplicateFinder::clear.
 */
void DuplicateFinderWrapper::Clear(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::HandleScope scope(env);

    this->duplicateFinder_->clear();
}

/**
 * N-API wrapping for DuplicateFinder::deleteFile.
 */
Napi::Value DuplicateFinderWrapper::DeleteFile(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::HandleScope scope(env);

    int length = info.Length();
    if (length != 1)
    {
        Napi::TypeError::New(env, "Path string expected").ThrowAsJavaScriptException();
    }

    Napi::String value = info[0].As<Napi::String>();

    return Napi::Boolean::New(env, this->duplicateFinder_->deleteFile(value));
}