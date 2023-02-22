
"""
Created on Wed Feb 22 15:38:17 2023

@author: lebuso tsilo
"""
class Solution:
    def groupAnagrams(self, strs):
        anagram_groups = []   # Initialize empty list to store anagram groups
        i = 0   # Initialize loop index to 0
        while i < len(strs):   # Loop until end of input list is reached
            word = strs[i]   # Select current word for comparison
            anagram_group = [word]   # Initialize new anagram group with current word
            j = i + 1   # Initialize inner loop index to next position
            while j < len(strs):   # Loop over remaining words in input list
                other_word = strs[j]   # Select next word for comparison
                if sorted(other_word) == sorted(word):   # Check if words have the same sorted letter sequence
                    anagram_group.append(other_word)   # Add word to current anagram group
                    strs.pop(j)   # Remove word from input list
                else:
                    j += 1   # Move to next word in input list
            i += 1   # Move to next word in input list
            anagram_groups.append(anagram_group)   # Add current anagram group to list of anagram groups
        return sorted(anagram_groups,key = len) # Return list of anagram groups

ob1 = Solution()   # Create instance of Solution class
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))   # Call groupAnagrams() method with input list

