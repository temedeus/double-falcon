#include "duplicatefinder.h"
#include <iostream>
#include <experimental/filesystem>

namespace fs = std::experimental::filesystem;

DuplicateFinder::DuplicateFinder(std::string path)
{
    this->pathToScan_ = path;
}

bool DuplicateFinder::scan()
{
    return false;
}