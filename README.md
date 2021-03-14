# Array utility(Archived)
### *A simple python utility library*

## What is PyArray ?
Well, PyArray is a simple python-array-utlity library.
It contains a  set of a array methods which can speed up your development.

## How to use it?
Create a  pyarray list
```python
import pyarray
```
#### PyArray types
Strings
```python
pyarray.string()
# strings
```
Integers
```python
pyarray.integer()
# integer
```

Floats
```python
pyarray.floating()
# floating point
```
Dictionaried , booleans and lists
```python
#dictionaries
pyarray.dictionary()

#boolean values
pyarray.boolean()

# lists
pyarray.lists()
```
#### Create a list
```python
arr = pyarray.List(pyarray.integer())
```
#### Methods
Length
```python
arr.len()
```
Add
```python
arr.add(4)

# The array don't support duplicate elements
# no element is added if it already exists 
# int the list
```

elementAt(index:integer)
```python
index = 1
arr.elementAt(index)
```

median 
```python
# find the median
# only for integers and floats
arr.median()
```

delete_index(index:integer)
```python
arr.delete_index(-1)
```

search_insert_position
```python
target = 9
arr.search_insert_postion(target)
```
index
```python
arr.index()
```
peak
```python
# the index of maximum element
arr.peak_index()
```
all
```python
arr.all()
# returns all the element
```
count
```python
arr.count(5)
```
Maximum and minimum
```python
# maximum
arr.range().maximum()

# minimum
arr.range().minimum()
```

Choice
```python
arr.choice()

# gives a random element
```

Other methods
```python
# sort the array
arr.sort()

# find an element
arr.find()

# delete an element
arr.delete(3)

# clear all the element
arr.clear()

# reverse an array
arr.reverse()

arr.alternate_index()
```
