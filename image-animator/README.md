# 🎬 Animador de Imágenes

Una aplicación web local para animar imágenes usando prompts de texto.

## 📋 Características

- Interfaz web moderna y fácil de usar
- Soporte para múltiples formatos de imagen (PNG, JPG, JPEG, GIF, WEBP)
- Arrastrar y soltar imágenes
- Vista previa de imágenes antes de procesar
- Diseño responsivo
- Funciona completamente en tu PC local

## 🚀 Instalación

### 1. Instalar dependencias

```bash
cd image-animator
pip install -r requirements.txt
```

### 2. Ejecutar la aplicación

```bash
python app.py
```

### 3. Abrir en el navegador

Ve a: **http://localhost:5000**

## 💡 Cómo usar

1. Abre la aplicación en tu navegador
2. Arrastra una imagen o haz clic para seleccionarla
3. Escribe un prompt describiendo cómo quieres animar la imagen
4. Haz clic en "Animar Imagen"
5. La aplicación procesará tu solicitud

## 📁 Estructura del proyecto

```
image-animator/
├── app.py              # Servidor Flask backend
├── requirements.txt    # Dependencias de Python
├── README.md          # Este archivo
├── templates/
│   └── index.html     # Interfaz de usuario
├── uploads/           # Imágenes subidas (se crea automáticamente)
└── outputs/           # Resultados y metadata (se crea automáticamente)
```

## 🔧 Notas importantes

- Esta es una versión base que recibe las imágenes y prompts
- Para añadir animación real, necesitarás integrar una API de animación de imágenes como:
  - **Stable Video Diffusion** (local, requiere GPU potente)
  - **RunwayML API** (servicio externo)
  - **Kaiber API** (servicio externo)
  - **Deforum** (local, para After Effects/Blender)

## 🛠️ Próximos pasos para animación real

Si quieres añadir funcionalidad de animación real, puedes:

1. **Opción Local (Requiere GPU NVIDIA):**
   - Instalar Stable Video Diffusion
   - Necesitarás CUDA y al menos 8GB VRAM

2. **Opción API (Más fácil):**
   - Registrarte en RunwayML o similar
   - Obtener una API key
   - Modificar `app.py` para llamar a la API

## 📝 Ejemplos de prompts

- "Haz que el agua se mueva suavemente"
- "Anima las nubes para que se desplacen lentamente"
- "Añade movimiento al cabello con el viento"
- "Haz parpadear los ojos suavemente"
- "Crea ondulaciones en la superficie del lago"

## ⚙️ Configuración

- **Puerto:** 5000 (puedes cambiarlo en `app.py`)
- **Tamaño máximo de archivo:** 16MB
- **Host:** localhost (solo accesible desde tu PC)

## 🆘 Solución de problemas

**Error: "No module named flask"**
```bash
pip install flask
```

**Error: Puerto ya en uso**
```python
# Cambia el puerto en app.py
app.run(debug=True, host='127.0.0.1', port=5001)  # Usa otro puerto
```

---

¡Disfruta animando tus imágenes! 🎉
