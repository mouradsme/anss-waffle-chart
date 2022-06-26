import { PanelPlugin } from '@grafana/data';
import { ChartOptions } from './types';
import { ANSSChartsPanel } from './ANSSChartsPanel';
import { OrderBy } from './options/OrderBy'

export const plugin = new PanelPlugin<ChartOptions>(ANSSChartsPanel).setPanelOptions(builder => {
  return builder
  .addCustomEditor({
    path: 'OrderBy',
    name: 'Ordonner par',
    description: 'Ordonner les données par cette colonne',
    editor: OrderBy,
    id: "OrderBy",
    category: ["Options de tri"]
  })
  .addRadio({
    path: "OrderDirection",
    name: "Asc/Desc",
    description: "Direction de l'ordre",
    settings: {
      options: [{label: 'Ascendant', value: 'asc'}, {label: 'Descendant', value: 'desc'}]
    },
    defaultValue: 'asc',
    category: ['Options de tri']
  })
  .addColorPicker({
    path: "BackgroundColor",
    name: "Couleur de fond de la figure",
    defaultValue: 'white',
    category: ['Couleurs', 'Fond']
  })
  .addColorPicker({
    path: "textColor",
    name: "Couleurs des Labels",
    defaultValue: "white",
    category: ['Couleurs', 'Textes']
  })
  .addBooleanSwitch({
    path: "autoColoring",
    name: "Couleurs Auto?",
    description: "Si cette option est activée, les couleurs des arcs seront choisies automatiquement, sinon les gradients seront utilisés",
    defaultValue: false,
    category: ['Couleurs', 'Arcs']
  })
  .addColorPicker({
    path: "gradientColor1",
    name: "Couleur 1 du gradient",
    defaultValue: "blue",
    category: ['Couleurs', 'Arcs']
  })
  .addColorPicker({
    path: "gradientColor2",
    name: "Couleur 2 du gradient",
    defaultValue: "red",
    category: ['Couleurs', 'Arcs'],
  })
  .addNumberInput({
    path: "fontSize",
    name: "Taille du texte en pixels",
    defaultValue: 12,
    settings: {
      min: 5,
      step: 1
    },
    category: ["Options du graphe"]
  })
  .addNumberInput({
    path: "height",
    name: "Hauteur du graphe",
    defaultValue: 400,
    settings: {
      min: 0
    },
    category: ["Options du graphe"]
  })
  .addNumberInput({
    path: "rowsNumber",
    name: "Nombre de lignes",
    defaultValue: 15,
    settings: {
      min: 1
    },
    category: ["Options du graphe"]
  })

  .addNumberInput({
    path: "scale",
    name: "Echelle (si les valeurs sont grandes, utilisez une petite échelle, eg: 0.1)",
    defaultValue: .1,
    settings: {
      step: 0.01,
      min: 0.01
    },
    category: ["Options du graphe"]
  })

  
})