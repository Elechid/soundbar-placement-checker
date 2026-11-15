import { sound } from './tools.mjs';

export const tools = {
  soundbar: {
    title: ['Soundbar placement checker','Soundbar 擺位檢查器'],
    fields: [["Soundbar height (mm)", "Soundbar 高度（毫米）", 60, 1], ["Gap below TV picture (mm)", "畫面底至櫃面（毫米）", 65, 0], ["Soundbar depth (mm)", "Soundbar 深度（毫米）", 100, 1], ["Usable shelf depth (mm)", "櫃面可用深度（毫米）", 120, 0], ["Rear cable clearance needed (mm)", "後方插頭及線材所需空間（毫米）", 20, 0], ["Soundbar width (mm)", "Soundbar 闊度（毫米）", 900, 1], ["Usable shelf width (mm)", "櫃面可用闊度（毫米）", 1000, 0], ["Gap from bar top to obstruction above (mm)", "Soundbar 頂部至上方障礙物（毫米）", null, 0], ["Minimum overhead gap in manual (mm)", "說明書要求的上方空間（毫米）", null, 0], ["TV remote sensor height above shelf (mm)", "電視遙控接收器離櫃面高度（毫米）", null, 0]],
    labels: [["Picture clearance", "畫面下方餘位", "mm"], ["Depth after cable allowance", "扣除線材位後的深度餘位", "mm"], ["Width clearance", "櫃面闊度餘位", "mm"], ["Overhead gap against manual", "按說明書核對上方餘位", "mm"], ["Sensor height minus bar height", "接收器與 Soundbar 高度差", "mm"]],
    guide: "soundbar-placement-small-flat-hong-kong",
    intro: ["Negative values show a shortfall. When the sensor has no height clearance, test the remote from your normal seat. Follow the speaker manual for clearance and driver placement.", "負數代表位置不足。若接收器沒有高度餘位，請在平時坐的位置實試遙控。上方空間和發聲單元擺位請按說明書。"],
    calculate: sound,
    note: ['A negative value is a shortfall. Leave room for plugs and ventilation, verify the TV remote sensor stays clear, and follow the speaker manual for upward-firing drivers and rear speaker placement.', '負數代表空間不足。請預留插頭和散熱位置，確認遙控接收器未被遮住，並按說明書安排向上發聲單元和後置喇叭。'],
  },
};
