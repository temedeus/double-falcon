#include "duplicatefinder.h"
#include <iostream>
#include <filesystem>
#include <fstream>
#include "sha/sha256.h"

namespace fs = std::filesystem;

/**
 * Duplicate Finder
 * 
 * path Path to operate on.
 */
DuplicateFinder::DuplicateFinder(std::string path)
{
    this->pathToScan_ = path;
}

/**
 * Scan path received in constructor. Returnes boolean on results.
 * Use DuplicateFinder::getResults for actual results.
 */
bool DuplicateFinder::scan()
{
    bool duplicatesFound = false;
    for (auto &p : fs::recursive_directory_iterator(this->pathToScan_))
    {

        if (fs::is_regular_file(p))
        {
            std::cout << "Working file: " << p.path() << '\n';
            if (fs::file_size(p) < MAXIMUM_FILE_SIZE)
            {
                /**
                 *  Read the file and buffer it into string for sha256 hashing. 
                 *  Not the most reliable method but sufficient for the purpose.
                 */
                std::ostringstream ofstrm;
                std::ifstream fin(p.path(), std::ios::binary);
                ofstrm << fin.rdbuf();
                std::string fileHash = sha256(ofstrm.str());

                if (fileHashes.count(fileHash) == 0)
                {
                    fileHashes[fileHash] = p.path();
                }
                else
                {
                    std::cout << "Duplicate found" << '\n';
                    duplicatesFound = true;
                    if (duplicates.count(fileHash) == 0)
                    {
                        std::set<std::string> temp;
                        temp.insert(p.path());
                        temp.insert(fileHashes[fileHash]);
                        duplicates[fileHash] = temp;
                    }
                    else
                    {
                        duplicates[fileHash].insert(p.path());
                    }
                }
            }
            else
            {
                std::cout << "File too large, discarding." << '\n';
            }
        }
    }

    // No duplicates found.
    return duplicatesFound;
}

/**
 * Provide results after DuplicateFinder::scan().
 * Otherwise empty set.
 */
std::unordered_map<std::string, std::set<std::string>> DuplicateFinder::getResults()
{
    return duplicates;
}

/**
 * Clear hashes cache.
 */
void DuplicateFinder::clear()
{
    fileHashes.clear();
}