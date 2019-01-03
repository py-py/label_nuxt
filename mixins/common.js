let commonMixin = {
  methods: {
    getLocalDatetime: function(ts) {
      return new Date(ts).toDateString()
    },
    getMomentFromNow: function (ts) {
      return this.$moment(ts).fromNow()
    },
    getKindName: function (idKind) {
      let kind = this.$store.getters.loadedKinds.find(el => el.id === idKind);
      return kind.name
    },
    getManufactureName: function (idManufacturer) {
      let manufacturer = this.$store.getters.loadedManufactures.find(el => el.id === idManufacturer);
      return manufacturer.name
    },
  },
}

export default commonMixin;
