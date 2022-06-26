import chroma from 'chroma-js';

export const Utils = {
    Populate(Fields, OrderBy = 'value', Desc = false) {
        let that = this
        let dataset = []
        let rowsLength = Fields[0].values.length
        for (let i = 0; i < rowsLength; i++) {
            let id = Fields[0].values.get(i)
            let name = Fields[1].values.get(i)
            let value = Number(Fields[2].values.get(i))
            let datasetId = Fields[3].values.get(i)
            dataset.push({ value, name })
        }
        let Sorted = Object.values(dataset)
        if (typeof dataset[0].value === 'number')
            Sorted = Sorted.sort(function(a, b) { return that.SortBy(a, b, OrderBy) })
        else Sorted = Sorted.sort()
        if (Desc)
            Sorted.reverse()
        return Sorted
    },
    SortBy(a, b, key) {
        return a[key] - b[key]
    },
    Colors(Colors, ValuesNumber) {
        return chroma.scale(Colors).colors(ValuesNumber)

    },
    slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .trim(); // Trim - from end of text
    }

}