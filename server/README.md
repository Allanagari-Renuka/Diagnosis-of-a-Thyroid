# Thyroid Flask API Server

## Setup
1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Place your ONNX model file at `model/thyroid_cnn.onnx`

3. Run the server:
```bash
python app.py
```

## API Endpoints
- `GET /api/health` - Server health check
- `POST /api/predict` - Upload image for diagnosis (PNG/JPG/JPEG)

## Notes
- The server requires an ONNX model file at `model/thyroid_cnn.onnx`
- Server runs on port 5000 by default
- Uploads are saved to `uploads/` directory
