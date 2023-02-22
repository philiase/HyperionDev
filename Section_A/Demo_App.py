# -*- coding: utf-8 -*-
"""
Created on Wed Feb 22 18:32:31 2023

@author: lebuso tsilo
"""
import streamlit as st

def group_anagrams(strs):
    result = {}
    for i in strs:
        x = "".join(sorted(i))
        if x in result:
            result[x].append(i)
        else:
            result[x] = [i]
    return sorted(list(result.values()),key =len)

def main():
    st.image('img/favicon.png')
    words = ["eat", "tea", "tan", "ate", "nat", "bat"]
    st.title("Anagram Grouper")
    selected_words = st.multiselect("Select words", words)
    group_button = st.button("Group")
    if group_button:
        groups = group_anagrams(selected_words)
        for i, group in enumerate(groups):
            st.write(f"Group {i + 1}: {', '.join(group)}")

if __name__ == "__main__":
    main()
