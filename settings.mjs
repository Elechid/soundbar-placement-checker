import { sound } from './tools.mjs';

export const tools = {
  soundbar: {
    title: ['Soundbar placement checker','Soundbar 擺位檢查器'],
    fields: [
      ['Soundbar height (mm)','Soundbar 高度（毫米）',60,1],
      ['Gap below TV screen (mm)','電視畫面底至櫃面（毫米）',65,0],
      ['Soundbar depth (mm)','Soundbar 深度（毫米）',100,1],
      ['Usable shelf depth (mm)','櫃面可用深度（毫米）',90,0],
      ['Soundbar width (mm)','Soundbar 闊度（毫米）',900,1],
      ['Usable shelf width (mm)','櫃面可用闊度（毫米）',1000,0],
    ],
    labels: [['Vertical clearance','畫面下方餘位','mm'],['Depth clearance','櫃面深度餘位','mm'],['Width clearance','櫃面闊度餘位','mm']],
    calculate: sound,
    note: ['A negative value is a shortfall. Leave room for plugs and ventilation, verify the TV remote sensor stays clear, and follow the speaker manual for upward-firing drivers and rear speaker placement.', '負數代表空間不足。請預留插頭和散熱位置，確認遙控接收器未被遮住，並按說明書安排向上發聲單元和後置喇叭。'],
  },
};
