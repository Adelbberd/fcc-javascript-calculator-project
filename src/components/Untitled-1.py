def search(text, word):
  if word.find(text):
    print('word found')
  else:
    print('word not found')

text = input('enter text... ')
word = input('enter word... ')

search(text, word)