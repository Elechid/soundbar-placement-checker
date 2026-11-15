export function sound(h,gap,d,shelf,cable,w,wide,above,required,sensor) {
  return [gap-h,shelf-d-cable,wide-w,above==null||required==null?null:above-required,sensor==null?null:sensor-h];
}
