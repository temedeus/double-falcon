#include <napi.h>
#include "duplicatefinder.h"

class DuplicateFinderWrapper : public Napi::ObjectWrap<DuplicateFinderWrapper>
{
public:
    static Napi::Object Init(Napi::Env env, Napi::Object exports);
    DuplicateFinderWrapper(const Napi::CallbackInfo &info);

private:
    static Napi::FunctionReference constructor;
    Napi::Value Scan(const Napi::CallbackInfo &info);
    void Clear(const Napi::CallbackInfo &info);
    Napi::Value DeleteFile(const Napi::CallbackInfo &info);
    DuplicateFinder *duplicateFinder_;
};