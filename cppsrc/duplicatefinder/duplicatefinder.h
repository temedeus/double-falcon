#include <iostream>
#include <unordered_map>
#include <set>

class DuplicateFinder
{
public:
    DuplicateFinder(std::string path);
    bool scan();
    void clear();
    bool deleteFile(std::string file);
    std::unordered_map<std::string, std::set<std::string>> getResults();

private:
    std::string pathToScan_;
    const long unsigned int MAXIMUM_FILE_SIZE = 30000000;
    std::unordered_map<std::string, std::string> fileHashes = {};
    std::unordered_map<std::string, std::set<std::string>> duplicates = {};
};