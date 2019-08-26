#include "duplicatefinder.h"
#include <iostream>
#include <filesystem>
namespace fs = std::filesystem;

DuplicateFinder::DuplicateFinder(std::string path)
{
    this->pathToScan_ = path;
}

bool DuplicateFinder::scan()
{
    for (auto &p : fs::recursive_directory_iterator(this->pathToScan_))
        std::cout << p.path() << '\n';
    return false;
}