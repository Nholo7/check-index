import base64
import yfinance as yf
from flask import Flask, render_template, jsonify, request
from matplotlib.figure import Figure
from io import BytesIO

app = Flask(__name__)

# Initial load of the intex page
@app.route('/')
def index():
    return render_template('index.html')

# Recreate the plot image for a specific index
@app.get('/refresh')
def refresh():
    index = request.args.get('index')
    width = request.args.get('width')
    height = request.args.get('height')
    data = getStockData(index)
    return jsonify(getPlotImage(data, int(width), int(height)))

def getStockData(index):
    return yf.download(index, interval="1m", period="1d")

def getPlotImage(data, width, height):
    # Generate the index figre.
    fig = Figure(figsize=( width/100, height/100 ),dpi=100)
    ax = fig.subplots()
    ax.plot(data.Close)
    # Save it to a temporary buffer.
    buf = BytesIO()
    fig.savefig(buf, format="png")
    # Embed the result in the html output.
    return base64.b64encode(buf.getbuffer()).decode("ascii")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)