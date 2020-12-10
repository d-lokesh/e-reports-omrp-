import time
import flask
from flask_cors import CORS
from flask import request, jsonify
from joblib import dump, load
import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
# Naive Bayes Approach
from sklearn.naive_bayes import MultinomialNB
# Trees Approach
from sklearn.tree import DecisionTreeClassifier
# Ensemble Approach
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier


app = flask.Flask(__name__)
CORS(app)


clf = load("./model.joblib")


@app.route('/reg', methods=['post'])
def reg():
    print("calling")
    # if request.method == 'POST':
    #     a = request.form.get('a')
    #     b = request.form.get('b')
    #     c = a+b
    l = [[0]*132]
    a = request.get_json()['a']
    a = a.values()
    a = list(a)
    a.append(1)
    l = [a]
    ans = clf.predict(l)
    return ans[0]
