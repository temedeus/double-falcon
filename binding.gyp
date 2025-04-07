{
    "targets": [{
        "target_name": "duplicatefinder",
        "cflags": [ "-std=c++17" ],
        "cflags_cc": ["-std=c++17" ],
        "sources": [
            "cppsrc/main.cpp",
            "cppsrc/duplicatefinder/duplicatefinderwrapper.cpp",
            "cppsrc/duplicatefinder/duplicatefinder.cpp",
            "cppsrc/duplicatefinder/sha/sha256.cpp"
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")"
        ],
        'libraries': [],
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
    }]
}