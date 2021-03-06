#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


float mande(vec2 _st){
vec2 ric=vec2(0.,0.);
float quando=1000.;
float x;
for(float i=0.;i<1000.;i++){
    x=ric.x;
   ric.x=ric.x*ric.x-ric.y*ric.y+_st.x;
   ric.y=2.*x*ric.y+_st.y;
  if(ric.x*ric.x+ric.y*ric.y>=4.){
    quando=i;
    return quando;
  }

}
return quando;

}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  vec2 mou=u_mouse;
//  mou=vec2(0.5001,0.51);
  float zoo=1.+pow(mod(abs(8.-mod(u_time+8.,15.999999)),8.)/2.,10.);
  st*=3.;
  st-=3./2.;
  //st.x-=0.75;

  mou*=3.;
  mou-=3./2.;
  mou.x-=0.75;
  mou=-mou;
  st-=mou*zoo;
  st/=zoo;
  float color=mande(st);
  float col=pow(color,.5)/pow(999.,.5);
  float cc=mod(color,100.)/100.;
  float ccc=mod(color,199.9);
  float p=floor(ccc/100.);

 //gl_FragColor=vec4(mod(color,3.)/2.,mod(color+1.,6.)/5.,mod(color+3.,11.)/10.,1.0);
 gl_FragColor=vec4(col*col,col,col*col*col,1.);
 gl_FragColor=vec4(0.0,cc*p,cc*abs(p-1.),1.);
}
