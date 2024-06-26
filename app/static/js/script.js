$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});
document.getElementById('upload-button').addEventListener('click', function() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    fetch('/upload_image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var img = document.getElementById('preview-img');

        // 添加时间戳来防止缓存
        var timeStamp = new Date().getTime();
        var newImageUrl = data.imageUrl + "?t=" + timeStamp;

        img.src = newImageUrl;

        // 调用图片识别接口
        return fetch('/detect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ imageUrl: newImageUrl })
        });
    })
    .then(response => response.json())
    .then(detectionData => {
        // 显示识别结果
        document.getElementById('action-class').textContent = detectionData.classification || '';
        document.getElementById('action-score').textContent = detectionData.score || '';
        document.getElementById('action-suggestion').textContent = detectionData.suggestion || '';
    });
});
