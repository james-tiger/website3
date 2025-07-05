# Website3 - Video Sharing Platform

A modern video sharing platform built with HTML, CSS, and JavaScript. Experience seamless video uploading, browsing, and streaming with our user-friendly interface.

## 🎬 Live Demo

**Visit the live platform:** [https://james-tiger.github.io/website3/](https://james-tiger.github.io/website3/)

## ✨ Features

### 🎥 Video Management
- **Video Upload** - Upload your own videos with custom titles and descriptions
- **Video Library** - Browse through an organized collection of videos
- **Video Streaming** - Smooth video playback experience
- **Search Functionality** - Find videos quickly with our search feature

### 📱 User Interface
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Clean Interface** - Intuitive navigation with sidebar menu
- **Modern Styling** - Professional appearance with smooth animations
- **User-Friendly Controls** - Easy-to-use upload and playback controls

### 🎯 Navigation Features
- **Home** - Main dashboard with featured content
- **Trending** - Discover popular and trending videos
- **Subscriptions** - Manage your video subscriptions
- **Library** - Personal video collection and history
- **Videos** - Complete video catalog

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Video Handling**: HTML5 Video API
- **Styling**: Custom CSS with responsive design
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/james-tiger/website3.git
cd website3
```

2. **Open locally:**
```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Or simply open index.html in your browser
```

3. **Access the platform:**
   - Local: `http://localhost:8000`
   - Live: `https://james-tiger.github.io/website3/`

## 📁 Project Structure

```
website3/
├── index.html          # Main landing page
├── videos.html         # Video catalog page
├── styles/
│   ├── main.css       # Main stylesheet
│   ├── responsive.css # Mobile responsive styles
│   └── components.css # Component-specific styles
├── scripts/
│   ├── main.js        # Core functionality
│   ├── upload.js      # Video upload handler
│   └── player.js      # Video player controls
├── assets/
│   ├── images/        # Platform images and icons
│   └── videos/        # Sample video files
└── README.md          # Documentation
```

## 🎮 How to Use

### Uploading Videos
1. Navigate to the **Videos** section
2. Click on **"Upload Your Video"**
3. Select your video file using the file picker
4. Enter a descriptive title for your video
5. Add a detailed description
6. Click **"Upload Video"** to publish

### Browsing Videos
1. Use the **Search** bar to find specific content
2. Browse categories:
   - **Home** - Featured and recommended videos
   - **Trending** - Most popular content
   - **Library** - Your personal collection
3. Click on any video thumbnail to start playing

### Video Playback
- Click on any video to start playback
- Use standard video controls (play, pause, volume, fullscreen)
- Videos automatically adapt to your screen size

## 🎨 Customization

### Styling
Modify the CSS files in the `styles/` directory:
- `main.css` - Core platform styling
- `responsive.css` - Mobile and tablet layouts
- `components.css` - Individual component styles

### Branding
Update the platform branding:
```css
/* In main.css */
.platform-title {
    content: "Your Platform Name";
}

.logo {
    background-image: url('your-logo.png');
}
```

### Video Categories
Add new video categories by modifying the navigation:
```html
<!-- In index.html -->
<nav class="sidebar">
    <a href="#home">Home</a>
    <a href="#trending">Trending</a>
    <a href="#gaming">Gaming</a>
    <a href="#music">Music</a>
    <!-- Add more categories -->
</nav>
```

## 📊 Features Overview

### Current Video Collection
- Video 1 - Featured content
- Video 2 - Popular upload
- Video 3 - Trending video
- Video 4 - Community favorite
- Video 5 - Latest addition

### Upload Capabilities
- **File Types**: MP4, WebM, AVI, MOV
- **Max Size**: Depends on hosting limitations
- **Quality**: Supports HD and 4K uploads
- **Metadata**: Title, description, tags support

## 🔧 Configuration

### Video Settings
```javascript
// In scripts/main.js
const videoConfig = {
    maxFileSize: 100 * 1024 * 1024, // 100MB
    allowedTypes: ['mp4', 'webm', 'avi', 'mov'],
    autoplay: false,
    controls: true,
    responsive: true
};
```

### Platform Settings
```javascript
// In scripts/main.js
const platformConfig = {
    title: "R.ESCOBAR#1⭐®",
    description: "Your Video Platform",
    maxVideosPerPage: 12,
    enableComments: true,
    enableRatings: true
};
```

## 🎯 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Features

- **File Validation** - Only approved video formats accepted
- **Size Limits** - Prevents oversized uploads
- **Input Sanitization** - Protects against XSS attacks
- **Safe Playback** - Secure video streaming

## 📱 Mobile Optimization

- **Responsive Design** - Adapts to all screen sizes
- **Touch Controls** - Optimized for mobile interaction
- **Fast Loading** - Lightweight and efficient
- **Offline Support** - Basic caching capabilities

## 🚀 Performance

- **Fast Loading** - Optimized assets and code
- **Lazy Loading** - Videos load as needed
- **Caching** - Browser caching for repeat visits
- **Compression** - Optimized file sizes

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch:
```bash
git checkout -b feature/amazing-feature
```

3. Make your changes and commit:
```bash
git commit -m 'Add amazing feature'
```

4. Push to your branch:
```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

## 📈 Future Enhancements

- **User Authentication** - Login and user profiles
- **Comments System** - Video discussions
- **Rating System** - Like/dislike functionality
- **Playlists** - Organize videos into collections
- **Live Streaming** - Real-time video broadcasting
- **Advanced Search** - Filters and sorting options

## 🐛 Known Issues

- Large video files may take time to upload
- Some older browsers may have compatibility issues
- Mobile upload may be slower on poor connections

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help? Here's how to get support:
- 📧 Email: support@website3.com
- 🐛 Bug Reports: [GitHub Issues](https://github.com/james-tiger/website3/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/james-tiger/website3/discussions)

## 🏆 Acknowledgments

- Built with modern web technologies
- Inspired by popular video platforms
- Community-driven development
- Open source contributions welcome
