export default function logModule(_logOptions = {}) {
    
  
      this.nuxt.hook('render:setupMiddleware', app => {
        console.log('render:setupMiddleware',app)
      });

      this.nuxt.hook('render:before', app => {
        console.log('render:before')
      });

      this.nuxt.hook('render:resourcesLoaded', app => {
        console.log('render:resourcesLoaded')
      });
      this.nuxt.hook('render:done', app => {
        console.log('render:done')
      });
      this.nuxt.hook('render:routeContext', app => {
        console.log('render:routeContext')
      });


      this.nuxt.hook('render:route', (_,$,c) => {

        
        const test = c.req.rawHeaders.reduce((r, z, i)=>{
            if(i%2 === 0) {
                r[z] = ''
            } else {
                r[c.req.rawHeaders[i-1]] = z;
            }
            return r;
         },{});
        console.log('render:route',_)
      });

      this.nuxt.hook('render:routeDone', app => {
        console.log('render:routeDone')
      });

      this.nuxt.hook('render:errorMiddleware', app =>
        console.log('render:errorMiddleware')
      );
  
      this.nuxt.hook('error', error => console.error(error));
      this.nuxt.hook('close', () => Logger.alert('close nuxt'));
   
  }