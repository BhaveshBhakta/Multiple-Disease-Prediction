from flask import Flask, request, render_template
import pickle

app = Flask(__name__)
heart_model = pickle.load(open("heart_model.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")  

@app.route("/predict_page", methods=["GET"])
def predict_page():
    return render_template("predict.html") 

@app.route("/predict", methods=["POST"])
def predict():
    result = None
    if request.method == 'POST':
   
        user_input = [
            request.form.get('age'),
            request.form.get('sex'),
            request.form.get('cp'),
            request.form.get('trestbps'),
            request.form.get('chol'),
            request.form.get('fbs'),
            request.form.get('restecg'),
            request.form.get('thalach'),
            request.form.get('exang'),
            request.form.get('oldpeak'),
            request.form.get('slope'),
            request.form.get('ca'),
            request.form.get('thal')
        ]

        user_input = [float(x) if x else 0.0 for x in user_input]

        prediction = heart_model.predict([user_input])
        result = "The Person has Heart Disease" if prediction[0] == 1 else "The Person does not have a Heart Disease"
    
    return render_template("predict.html", result=result)

if __name__ == '__main__':
    app.run(debug=True)
