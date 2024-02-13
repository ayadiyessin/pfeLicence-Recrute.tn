import pickle
import numpy as np
import json
from flask_cors import CORS
from flask import Flask, request, jsonify, make_response
import numpy as np
import requests
import pandas as pd
from sklearn.neighbors import NearestNeighbors


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

pfdata = pd.read_csv(r"C:\Users\USER\Desktop\recsystem\match\d6.csv", encoding='latin-1')



def predres(idclient):
    v = idclient
    print(idclient)
    rating_books_sample = pfdata.sample(frac=.09, random_state=1) 
    rating_books_pivot = rating_books_sample.pivot_table(index='_id', values='Comp_PY').fillna(0)
    print(rating_books_pivot.head())
    model_nn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=3, n_jobs=-1)
    model_nn.fit(rating_books_pivot)
    try:
        indices=model_nn.kneighbors(rating_books_pivot.loc[[v]], 5, return_distance=False)
    except  KeyError:
        indices= 0
    l = []
    j = 0
    res = rating_books_pivot[:5]
    for index, value in enumerate(res.index):
        print((index+1),". ",value)
        l.append(value)
    return l 




def predres2(idclient):
    v = idclient
    print(idclient)
    rating_books_sample = pfdata.sample(frac=.09, random_state=1) 
    rating_books_pivot = rating_books_sample.pivot_table(index='ID_DEMANDEUR', values='Comp_DEMPY').fillna(0)
    print(rating_books_pivot.head())
    model_nn = NearestNeighbors(metric='cosine', algorithm='brute', n_neighbors=3, n_jobs=-1)
    model_nn.fit(rating_books_pivot)
    try:
        indices=model_nn.kneighbors(rating_books_pivot.loc[[v]], 5, return_distance=False)
    except  KeyError:
        indices= 0
    l = []
    j = 0
    res = rating_books_pivot[:5]
    for index, value in enumerate(res.index):
        print((index+1),". ",value)
        l.append(value)
    return l 



@app.route("/hostpredres", methods=["POST", "OPTIONS"])
def hostpredres():
    # output = request.get_json()
    # idclient = output["word"]
    # print(idclient)
    if request.method == "OPTIONS": # CORS preflight
        return _build_cors_prelight_response()
    elif request.method == "POST":
        dicts = {}
        output = request.get_json()
        idclient = output["word"]
        r = predres(idclient)
        print(r)
        r = str(r)

        dicts.update({"res" : r} )
        return _corsify_actual_response(jsonify(dicts))
    else :
        raise RuntimeError("Weird - don't know how to handle method {}".format(request.method))


@app.route("/hostpredresd", methods=["POST", "OPTIONS"])
def hostpredresd():
    # output = request.get_json()
    # idclient = output["word"]
    # print(idclient)
    if request.method == "OPTIONS": # CORS preflight
        return _build_cors_prelight_response()
    elif request.method == "POST":
        dicts = {}
        output = request.get_json()
        idclient = output["word"]
        r = predres2(idclient)
        print(r)
        r = str(r)

        dicts.update({"res" : r} )
        return _corsify_actual_response(jsonify(dicts))
    else :
        raise RuntimeError("Weird - don't know how to handle method {}".format(request.method))


@app.route("/", methods=["POST", "OPTIONS"])
def api_create_order():
    print("welcome")
    dicts = {}
    dicts.update({"res" : "welcome"} )
    return _corsify_actual_response(jsonify(dicts))

def _build_cors_prelight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    app.run(host='192.168.43.96', port=5000)
