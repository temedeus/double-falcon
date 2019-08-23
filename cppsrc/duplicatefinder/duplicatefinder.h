#include <iostream>

class DuplicateFinder
{
public:
    DuplicateFinder(std::string path);
    bool scan();

private:
    std::string pathToScan_;
};