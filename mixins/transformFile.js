const transformMixin = {
  methods: {
    convertBase64ToFile: function (dataUrl, filename) {
      let arr = dataUrl.split(',');
      let mime = arr[0].match(/:(.*?);/)[1];
      let bstr = atob(arr[1]);
      let n = bstr.length;
      let u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      let extension = mime.split('/')[1];
      return new File([u8arr], `${filename}.${extension}`, { type: mime });
    }

  },
}

export default transformMixin;
