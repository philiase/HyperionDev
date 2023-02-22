
"""
Created on Wed Feb 22 14:11:24 2023

@author: lebuso tsilo
"""

class Solution:
       def groupAnagrams(self, strs):
           result = {}
           for i in strs:
               x = "".join(sorted())
               if x in result:
                   result[x].append(i)
               else:
                   result[x] = [i]
           return list(result.values())
ob1 = Solution()
print(ob1.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
