class ProxyLibraryKiosk{
    
    open(app){
        const apps = ["camera", "photos", "music", "settings"]
        if(apps.includes(app)){
            const message = `You can't access the ${app}`
            console.log(message);
            return message
        }
        const message = `Opening ${app}`
        console.log(message);
        return message
    }
    connectTo(website){
        const sites = ["fb.com", "instagram.com", "snapchat.com", "google.com", "and gmail.com"]
        
        if(sites.includes(website)){
            const message = `Access to ${website} denied`
            console.log(message);
            return message
        }
        const message = `Connecting to ${website}`
        console.log(message);
        return message
    }
}