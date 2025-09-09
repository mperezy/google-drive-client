import type { MenuItem } from 'types';

const dictionary: Record<string, MenuItem> = {
  es: {
    app: {
      submenu: [
        {
          title: 'Refrescar',
        },
        {
          title: 'Minimizar',
        },
        {
          title: 'Salir',
        },
      ],
    },
    file: {
      title: 'Archivo',
      submenu: {
        title: 'Tema',
        options: {
          dark: 'Oscuro',
          light: 'Claro',
        },
      },
    },
    edit: {
      title: 'Editar',
      submenu: [
        { role: 'undo', label: 'Deshacer' },
        { role: 'redo', label: 'Rehacer' },
        { type: 'separator' },
        { role: 'cut', label: 'Cortart' },
        { role: 'copy', label: 'Copiar' },
        { role: 'paste', label: 'Pegar' },
        { role: 'delete', label: 'Borrar' },
        { type: 'separator' },
        { role: 'selectAll', label: 'Seleccionar todo' },
      ],
    },
  },
  'en-US': {
    app: {
      submenu: [
        {
          title: 'Reload',
        },
        {
          title: 'Minimize',
        },
        {
          title: 'Exit',
        },
      ],
    },
    file: {
      title: 'File',
      submenu: {
        title: 'Theme',
        options: {
          dark: 'Dark',
          light: 'Light',
        },
      },
    },
    edit: {
      title: 'Edit',
      submenu: [
        { role: 'undo', label: 'Undo' },
        { role: 'redo', label: 'Redo' },
        { type: 'separator' },
        { role: 'cut', label: 'Cut' },
        { role: 'copy', label: 'Copy' },
        { role: 'paste', label: 'Paste' },
        { role: 'delete', label: 'Delete' },
        { type: 'separator' },
        { role: 'selectAll', label: 'Select All' },
      ],
    },
  },
};

export default dictionary;
