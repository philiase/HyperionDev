
"""
Created on Wed Feb 22 15:09:48 2023

@author: lebuso tsilo
"""

class Solution:
    def groupAnagrams(self, strs):
            result = {}   # create an empty dictionary to store the anagram groups
            for i in strs:   # iterate over each word in the list of strings
                x = "".join(sorted(i))   # sort the letters in the current word and join them back into a string
                if x in result:   # if the sorted string is already a key in the dictionary
                    result[x].append(i)   # add the word to the list of anagrams for that key
                else:
                    result[x] = [i]   # create a new key for the sorted string and add the word to a new list
            return sorted(list(result.values()), key=len)   # return a list of the anagram groups

ob1 = Solution()   # create an instance of the Solution class
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))   # call the groupAnagrams method with a list of strings as the argument
