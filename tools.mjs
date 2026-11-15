export function sound(h,gap,d,shelf,cable,w,wide,above,required,sensor) {
  return [gap-h,shelf-d-cable,wide-w,above==null||required==null?null:above-required,sensor==null?null:sensor-h];
}

export function cabinetFit({ cabinetWidth, cabinetDepth, tvWidth, standWidth, standDepth, frontDepth, barWidth, barDepth, barHeight, pictureGap, cable }) {
  return [
    cabinetWidth - tvWidth,
    cabinetWidth - standWidth,
    cabinetDepth - standDepth,
    frontDepth === null ? null : frontDepth - barDepth - cable,
    cabinetWidth - barWidth,
    pictureGap === null ? null : pictureGap - barHeight,
  ];
}
