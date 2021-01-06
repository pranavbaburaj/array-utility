import pylist

d = pylist.List(pylist.integer())

for x in range(349):
    d.add(x)
print(d.all())


print(d.choice())

d.clear()
print(d.all())