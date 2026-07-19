from flask import Flask, render_template, request, jsonify, send_from_directory
import os
import uuid
from datetime import datetime

app = Flask(__name__)

# Configuración
UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'outputs'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No se encontró ninguna imagen'}), 400
    
    file = request.files['image']
    prompt = request.form.get('prompt', '')
    
    if file.filename == '':
        return jsonify({'error': 'No se seleccionó ningún archivo'}), 400
    
    if file and allowed_file(file.filename):
        # Generar nombre único
        filename = f"{uuid.uuid4()}_{file.filename}"
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Aquí iría la lógica de animación
        # Por ahora, solo guardamos la información
        result = {
            'success': True,
            'message': 'Imagen recibida correctamente',
            'filename': filename,
            'prompt': prompt,
            'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }
        
        # Guardar metadata
        metadata_file = os.path.join(app.config['OUTPUT_FOLDER'], f"{filename}.txt")
        with open(metadata_file, 'w', encoding='utf-8') as f:
            f.write(f"Prompt: {prompt}\n")
            f.write(f"Fecha: {result['timestamp']}\n")
        
        return jsonify(result)
    
    return jsonify({'error': 'Tipo de archivo no permitido'}), 400

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    print("=" * 50)
    print("App de Animación de Imágenes")
    print("=" * 50)
    print("Servidor iniciado en: http://localhost:5000")
    print("Presiona Ctrl+C para detener")
    print("=" * 50)
    app.run(debug=True, host='127.0.0.1', port=5000)
