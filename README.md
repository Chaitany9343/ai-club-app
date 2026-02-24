# AI Club Management System - Vercel Deployment

## 🚀 Quick Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel account** at [vercel.com](https://vercel.com) (free)

2. **Download this entire folder** to your computer

3. **Go to [vercel.com/new](https://vercel.com/new)**

4. **Click "Add New Project"**

5. **Drag and drop the folder** or click "Browse" to select it

6. **Click "Deploy"**

7. **Wait 30 seconds** - Your app will be live!

8. **Access your app** at the URL provided (e.g., `your-app.vercel.app`)

### Method 2: Deploy via GitHub (Recommended for updates)

1. **Create a GitHub account** (if you don't have one)

2. **Create a new repository** on GitHub

3. **Upload these files** to the repository:
   - `package.json`
   - `vercel.json`
   - `api/storage.js`
   - `public/index.html`

4. **Go to [vercel.com](https://vercel.com)** and sign in

5. **Click "Add New Project"**

6. **Import your GitHub repository**

7. **Click "Deploy"**

8. **Your app is now live!** Any changes you push to GitHub will auto-deploy.

### Method 3: Vercel CLI (For developers)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to the project folder
cd ai-club-vercel

# Deploy
vercel

# Follow the prompts
```

## 📱 Using the App

Once deployed, you can access your app from:
- ✅ Your computer
- ✅ Your phone
- ✅ Any device with internet

**All data syncs across all devices!**

### Demo Accounts
- Admin: `admin` / `admin123`
- User: `user` / `user123`

## 🎯 Features

- Create events as admin
- Users can create teams (2-4 members)
- Assign points (0-10) to teams
- Global leaderboard
- Works on all devices (desktop, mobile, tablet)
- Data syncs in real-time

## ⚠️ Important Notes

**This version uses in-memory storage**, which means:
- ✅ Works across all devices
- ✅ Data syncs in real-time
- ⚠️ Data resets if the server restarts (every ~12-24 hours on free tier)

**For permanent storage**, you need to add a database. Options:
1. **Vercel KV** (Redis) - $0.25/month
2. **Supabase** - Free tier available
3. **MongoDB Atlas** - Free tier available
4. **Firebase** - Free tier available

Let me know if you need help setting up permanent storage!

## 🔧 Troubleshooting

**Events not showing on mobile?**
- Make sure you're accessing the Vercel URL (not opening the file locally)
- Both devices must use the same URL

**Data disappeared?**
- The free tier resets data periodically
- Consider upgrading to a database solution

## 📞 Support

Need help? Let me know and I'll assist with:
- Setting up a database
- Custom features
- Bug fixes
