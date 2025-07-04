// Load AWS SDK
AWS.config.update({
  accessKeyId: "AKIATEVAOXW7N6UVIDM2",
  secretAccessKey: "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",
  region: "eu-north-1"
});

const s3 = new AWS.S3();

function uploadFile() {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please choose a file to upload.");
    return;
  }

  const params = {
    Bucket: "mybucketsarat",
    Key: file.name,
    Body: file,
    };

  s3.upload(params, function(err, data) {
    if (err) {
      console.error("Upload failed:", err);
      alert("❌ Upload failed: " + err.message);
    } else {
      console.log("File uploaded:", data.Location);
      alert("✅ File uploaded!\nURL:\n" + data.Location);
    }
  });
}


