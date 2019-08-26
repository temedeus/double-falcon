#include <iostream>
#include <unordered_map>
#include <set>

class DuplicateFinder
{
public:
    DuplicateFinder(std::string path);
    bool scan();
    void clear();
    std::set<std::string> getResults();

private:
    std::string pathToScan_;
    const long unsigned int MAXIMUM_FILE_SIZE = 30000000;
    std::unordered_map<std::string, std::string> fileHashes = {};
    std::set<std::string> duplicates = {};
};