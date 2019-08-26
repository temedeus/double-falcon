#include "duplicatefinderwrapper.h"

Napi::FunctionReference DuplicateFinderWrapper::constructor;

Napi::Object DuplicateFinderWrapper::Init(Napi::Env env, Napi::Object exports)
{
    Napi::HandleScope scope(env);

    Napi::Function func = DefineClass(env, "DuplicateFinderWrapper",
                                      {InstanceMethod("scan", &DuplicateFinderWrapper::Scan)});

    constructor = Napi::Persistent(func);
    constructor.SuppressDestruct();

    exports.Set("DuplicateFinderWrapper", func);
    return exports;
}

DuplicateFinderWrapper::DuplicateFinderWrapper(const Napi::CallbackInfo &info) : Napi::ObjectWrap<DuplicateFinderWrapper>(info)
{
    Napi::Env env = info.Env();
    Napi::HandleScope scope(env);

    int length = info.Length();
    if (length != 1)
    {
        Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
    }

    Napi::String value = info[0].As<Napi::String>();
    this->duplicateFinder_ = new DuplicateFinder(value);
}

Napi::Value DuplicateFinderWrapper::Scan(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();
    Napi::HandleScope scope(env);

    bool success = this->duplicateFinder_->scan();

    Napi::Object obj = Napi::Object::New(env);
    std::set<std::string> duplicates = this->duplicateFinder_->getResults();
    for (auto x : duplicates)
    {
        obj.Set(x, "puh");
    }

    return obj;
}