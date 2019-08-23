#include <napi.h>
#include "duplicatefinder/duplicatefinderwrapper.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports)
{
  return DuplicateFinderWrapper::Init(env, exports);
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, InitAll)
