from flask import Blueprint, render_template, request, jsonify, current_app, send_from_directory
from app.utils.utils import allowed_file
import os
import numpy as np
import mediapipe as mp
import cv2
import pandas as pd
import torch
import torch.nn as nn
import torch.nn.functional as F

bp = Blueprint('index', __name__, url_prefix='/')


@bp.route('/')
def home():
    return render_template('index.html')

@bp.route('/upload')
def upload():
    return render_template('upload.html')

@bp.route('/result')
def result():
    return render_template('result.html')

@bp.route('/upload_image', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error':'No file part'})
    file = request.files['file']

    if  file.filename == '':
        return jsonify({'error' : 'No selected file'})

    if file and allowed_file(file.filename):
        filename = os.path.join(current_app.config['UPLOAD_FOLDER'], 'original.' + file.filename.split('.')[1])
        processed_image_filename = 'processed.' +file.filename.split('.')[1]
        processed_image_path = os.path.join(current_app.config['PROCESSED_FOLDER'],processed_image_filename)
        # 判断路径是否存在，不存在则创建
        if not os.path.exists(current_app.config['UPLOAD_FOLDER']):
            os.makedirs(current_app.config['UPLOAD_FOLDER'])
        if not os.path.exists(current_app.config['PROCESSED_FOLDER']):
            os.makedirs(current_app.config['PROCESSED_FOLDER'])

        # 保存原始文件
        file.save(filename)

        processed_image_filename = 'processed.' + file.filename.split('.')[1]
        processed_image_path = os.path.join(current_app.config['PROCESSED_FOLDER'], processed_image_filename)

        with open(filename, 'rb') as original_file:
            processed_data = original_file.read()
            with open(processed_image_path, 'wb') as processed_file:
                processed_file.write(processed_data)
    return jsonify({'imageUrl': '/processed/' + processed_image_filename})


@bp.route('/processed/<filename>')
def send_processed_image(filename):
    try:
        return send_from_directory(current_app.config['PROCESSED_FOLDER'], filename)
    except FileNotFoundError:
        return "File not found", 404



