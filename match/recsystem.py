import pandas as pd
from sklearn.neighbors import NearestNeighbors
import requests

"""
def getdata(id):

    print(rating_books)
    



def senddata(id):
    url = 'http://192.168.43.96:3000/recommendations'
    myobj = {'somekey': 'somevalue'}

    x = requests.post(url, data = myobj)

print(x.text)

"""

rating_books = pd.read_csv(r"C:\Users\USER\Desktop\recsystem\match\d5.csv", encoding='latin-1')

# Take 1 % data as sample  
rating_books_sample = rating_books.sample(frac=.09, random_state=1) 

print(rating_books_sample.head())

# Shape of the sample data
rating_books_sample.shape

rating_books_pivot = rating_books_sample.pivot_table(index='_id', values='Comp_PY').fillna(0)

# Show top-5 records
print(rating_books_pivot.head())



# Import NearestNeighbors

# Build NearestNeighbors Object
model_nn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=3, n_jobs=-1)

# Fit the NearestNeighbor
model_nn.fit(rating_books_pivot)


# Get top 10 nearest neighbors 
try:
    indices=model_nn.kneighbors(rating_books_pivot.loc[['628d0fbecc3e7b3b6832053b']], 5, return_distance=False)
except  KeyError:
    indices = 0

print( "indice :" , indices)


# Print the recommended books
print("Recommended Offers:")
print("==================")
for index, value in enumerate(rating_books_pivot.index[indices][0]):
    print((index+1),". ",value)

