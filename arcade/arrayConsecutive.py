# For statues = [6, 2, 3, 8], the output should be
# makeArrayConsecutive2(statues) = 3.
# it needs statues of sizes 4, 5 and 7.

def makeArrayConsecutive2(statues):
    return len(list(range(min(statues), max(statues)))) - len(statues)
