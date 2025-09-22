# 🎨 Paleta de Colores - Portafolio Chat Interface

## Color Base Principal: #004238

### 🌿 Escala de Verdes (Primary)
```css
primary-900: #001a17  /* Verde más oscuro */
primary-800: #002e28  /* Verde muy oscuro */
primary-700: #004238  /* Verde base principal ⭐ */
primary-600: #00594d  /* Verde medio oscuro */
primary-500: #007062  /* Verde medio */
primary-400: #00a085  /* Verde medio claro */
primary-300: #2dd4bf  /* Verde claro */
primary-200: #5eead4  /* Verde muy claro */
primary-100: #99f6e4  /* Verde suave */
primary-50:  #ccfbf1  /* Verde muy suave */
```

### 🖼️ Fondos (Backgrounds)
```css
bg-primary:       #001a17  /* Fondo principal oscuro */
bg-secondary:     #002e28  /* Fondo secundario */
bg-surface:       #004238  /* Superficie principal */
bg-surface-light: #00594d  /* Superficie clara */
bg-card:          #007062  /* Fondo de tarjetas */
bg-hover:         #00a085  /* Fondo hover */
bg-soft:          #ccfbf1  /* Fondo suave */
bg-subtle:        #f0fdfa  /* Fondo muy suave */
```

### 📝 Textos
```css
text-primary:   #f0fdfa  /* Texto principal (claro sobre oscuro) */
text-secondary: #ccfbf1  /* Texto secundario */
text-muted:     #99f6e4  /* Texto atenuado */
text-inverse:   #001a17  /* Texto inverso (oscuro sobre claro) */
text-accent:    #2dd4bf  /* Texto de acento */
```

### 🔲 Bordes
```css
border-primary:   #00594d
border-secondary: #007062
border-light:     #00a085
border-subtle:    #ccfbf1
```

### 💫 Sombras
```css
shadow-sm: rgba(0, 26, 23, 0.1)
shadow-md: rgba(0, 26, 23, 0.15)
shadow-lg: rgba(0, 26, 23, 0.2)
shadow-xl: rgba(0, 26, 23, 0.25)
```

## 🎯 Uso en Componentes

### ChatLayout
- **Fondo principal**: `bg-primary` (#001a17)

### Sidebar
- **Fondo**: `bg-surface` (#004238)
- **Bordes**: `border-primary` (#00594d)
- **Avatar**: `bg-card` (#007062)
- **Texto principal**: `text-primary` (#f0fdfa)
- **Texto secundario**: `text-secondary` (#ccfbf1)
- **Botón activo**: `bg-card` con `border-light`
- **Hover**: `bg-hover` (#00a085)

### ConversationArea
- **Fondo**: `bg-subtle` (#f0fdfa)
- **Header**: `bg-surface` (#004238)
- **Bordes**: `border-secondary` (#007062)

### ChatMessage
- **Burbujas usuario**: `bg-surface` (#004238)
- **Burbujas AI**: `bg-surface` (#004238)
- **Avatar usuario**: `bg-surface` (#004238)
- **Avatar AI**: `bg-soft` (#ccfbf1) con `border-surface`
- **Enlaces**: `text-accent` (#2dd4bf)
- **Texto destacado**: `text-accent` (#2dd4bf)

### Estados y Interacciones
- **Hover**: `bg-hover` (#00a085)
- **Activo**: `bg-card` (#007062)
- **Indicadores**: `bg-accent` (#2dd4bf)

## 🌙 Modo Oscuro
En modo oscuro, los tonos se profundizan automáticamente:
- Fondos más oscuros
- Textos más claros
- Bordes más sutiles

## ✨ Características
- ✅ Paleta cohesiva basada en verde #004238
- ✅ Contraste adecuado para accesibilidad
- ✅ Gradación natural de tonos
- ✅ Compatibilidad con modo oscuro
- ✅ Clases de Tailwind CSS integradas
- ✅ Variables CSS para consistencia
