import * as G000G001 from './gcodes/G000-G001';
import * as G002G003 from './gcodes/G002-G003';
import * as G004 from './gcodes/G004';
import * as G005 from './gcodes/G005';
import * as G006 from './gcodes/G006';
import * as G010 from './gcodes/G010';
import * as G011 from './gcodes/G011';
import * as G012 from './gcodes/G012';
import * as G017G019 from './gcodes/G017-G019';
import * as G020 from './gcodes/G020';
import * as G021 from './gcodes/G021';
import * as G026 from './gcodes/G026';
import * as G027 from './gcodes/G027';
import * as G028 from './gcodes/G028';
import * as G029 from './gcodes/G029';
import * as G030 from './gcodes/G030';
import * as G031 from './gcodes/G031';
import * as G032 from './gcodes/G032';
import * as G033 from './gcodes/G033';
import * as G034 from './gcodes/G034';
import * as G035 from './gcodes/G035';
import * as G038 from './gcodes/G038';
import * as G042 from './gcodes/G042';
import * as G053 from './gcodes/G053';
import * as G054G059 from './gcodes/G054-G059';
import * as G060 from './gcodes/G060';
import * as G061 from './gcodes/G061';
import * as G076 from './gcodes/G076';
import * as G080 from './gcodes/G080';
import * as G090 from './gcodes/G090';
import * as G091 from './gcodes/G091';
import * as G092 from './gcodes/G092';
import * as G425 from './gcodes/G425';
import * as M000M001 from './gcodes/M000-M001';
import * as M003 from './gcodes/M003';
import * as M004 from './gcodes/M004';
import * as M005 from './gcodes/M005';
import * as M007M009 from './gcodes/M007-M009';
import * as M010M011 from './gcodes/M010-M011';
import * as M016 from './gcodes/M016';
import * as M017 from './gcodes/M017';
import * as M018 from './gcodes/M018';
import * as M020 from './gcodes/M020';
import * as M021 from './gcodes/M021';
import * as M022 from './gcodes/M022';
import * as M023 from './gcodes/M023';
import * as M024 from './gcodes/M024';
import * as M025 from './gcodes/M025';
import * as M026 from './gcodes/M026';
import * as M027 from './gcodes/M027';
import * as M028 from './gcodes/M028';
import * as M029 from './gcodes/M029';
import * as M030 from './gcodes/M030';
import * as M031 from './gcodes/M031';
import * as M032 from './gcodes/M032';
import * as M033 from './gcodes/M033';
import * as M034 from './gcodes/M034';
import * as M042 from './gcodes/M042';
import * as M043T from './gcodes/M043-T';
import * as M043 from './gcodes/M043';
import * as M048 from './gcodes/M048';
import * as M073 from './gcodes/M073';
import * as M075 from './gcodes/M075';
import * as M076 from './gcodes/M076';
import * as M077 from './gcodes/M077';
import * as M078 from './gcodes/M078';
import * as M080 from './gcodes/M080';
import * as M081 from './gcodes/M081';
import * as M082 from './gcodes/M082';
import * as M083 from './gcodes/M083';
import * as M085 from './gcodes/M085';
import * as M092 from './gcodes/M092';
import * as M100 from './gcodes/M100';
import * as M104 from './gcodes/M104';
import * as M105 from './gcodes/M105';
import * as M106 from './gcodes/M106';
import * as M107 from './gcodes/M107';
import * as M108 from './gcodes/M108';
import * as M109 from './gcodes/M109';
import * as M110 from './gcodes/M110';
import * as M111 from './gcodes/M111';
import * as M112 from './gcodes/M112';
import * as M113 from './gcodes/M113';
import * as M114 from './gcodes/M114';
import * as M115 from './gcodes/M115';
import * as M117 from './gcodes/M117';
import * as M118 from './gcodes/M118';
import * as M119 from './gcodes/M119';
import * as M120 from './gcodes/M120';
import * as M121 from './gcodes/M121';
import * as M122 from './gcodes/M122';
import * as M125 from './gcodes/M125';
import * as M126 from './gcodes/M126';
import * as M127 from './gcodes/M127';
import * as M128 from './gcodes/M128';
import * as M129 from './gcodes/M129';
import * as M140 from './gcodes/M140';
import * as M141 from './gcodes/M141';
import * as M143 from './gcodes/M143';
import * as M145 from './gcodes/M145';
import * as M149 from './gcodes/M149';
import * as M150 from './gcodes/M150';
import * as M154 from './gcodes/M154';
import * as M155 from './gcodes/M155';
import * as M163 from './gcodes/M163';
import * as M164 from './gcodes/M164';
import * as M165 from './gcodes/M165';
import * as M166 from './gcodes/M166';
import * as M190 from './gcodes/M190';
import * as M191 from './gcodes/M191';
import * as M192 from './gcodes/M192';
import * as M193 from './gcodes/M193';
import * as M200 from './gcodes/M200';
import * as M201 from './gcodes/M201';
import * as M203 from './gcodes/M203';
import * as M204 from './gcodes/M204';
import * as M205 from './gcodes/M205';
import * as M206 from './gcodes/M206';
import * as M207 from './gcodes/M207';
import * as M208 from './gcodes/M208';
import * as M209 from './gcodes/M209';
import * as M211 from './gcodes/M211';
import * as M217 from './gcodes/M217';
import * as M218 from './gcodes/M218';
import * as M220 from './gcodes/M220';
import * as M221 from './gcodes/M221';
import * as M226 from './gcodes/M226';
import * as M240 from './gcodes/M240';
import * as M250 from './gcodes/M250';
import * as M256 from './gcodes/M256';
import * as M260 from './gcodes/M260';
import * as M261 from './gcodes/M261';
import * as M280 from './gcodes/M280';
import * as M281 from './gcodes/M281';
import * as M282 from './gcodes/M282';
import * as M290 from './gcodes/M290';
import * as M300 from './gcodes/M300';
import * as M301 from './gcodes/M301';
import * as M302 from './gcodes/M302';
import * as M303 from './gcodes/M303';
import * as M304 from './gcodes/M304';
import * as M305 from './gcodes/M305';
import * as M350 from './gcodes/M350';
import * as M351 from './gcodes/M351';
import * as M355 from './gcodes/M355';
import * as M360 from './gcodes/M360';
import * as M361 from './gcodes/M361';
import * as M362 from './gcodes/M362';
import * as M363 from './gcodes/M363';
import * as M364 from './gcodes/M364';
import * as M380 from './gcodes/M380';
import * as M381 from './gcodes/M381';
import * as M400 from './gcodes/M400';
import * as M401 from './gcodes/M401';
import * as M402 from './gcodes/M402';
import * as M403 from './gcodes/M403';
import * as M404 from './gcodes/M404';
import * as M405 from './gcodes/M405';
import * as M406 from './gcodes/M406';
import * as M407 from './gcodes/M407';
import * as M410 from './gcodes/M410';
import * as M412 from './gcodes/M412';
import * as M413 from './gcodes/M413';
import * as M420 from './gcodes/M420';
import * as M421 from './gcodes/M421';
import * as M422 from './gcodes/M422';
import * as M425 from './gcodes/M425';
import * as M428 from './gcodes/M428';
import * as M430 from './gcodes/M430';
import * as M486 from './gcodes/M486';
import * as M500 from './gcodes/M500';
import * as M501 from './gcodes/M501';
import * as M502 from './gcodes/M502';
import * as M503 from './gcodes/M503';
import * as M504 from './gcodes/M504';
import * as M510 from './gcodes/M510';
import * as M511 from './gcodes/M511';
import * as M512 from './gcodes/M512';
import * as M524 from './gcodes/M524';
import * as M540 from './gcodes/M540';
import * as M569 from './gcodes/M569';
import * as M575 from './gcodes/M575';
import * as M600 from './gcodes/M600';
import * as M603 from './gcodes/M603';
import * as M605 from './gcodes/M605';
import * as M665 from './gcodes/M665';
import * as M666 from './gcodes/M666';
import * as M672 from './gcodes/M672';
import * as M701 from './gcodes/M701';
import * as M702 from './gcodes/M702';
import * as M710 from './gcodes/M710';
import * as M7219 from './gcodes/M7219';
import * as M808 from './gcodes/M808';
import * as M810M819 from './gcodes/M810-M819';
import * as M851 from './gcodes/M851';
import * as M852 from './gcodes/M852';
import * as M860M869 from './gcodes/M860-M869';
import * as M871 from './gcodes/M871';
import * as M876 from './gcodes/M876';
import * as M900 from './gcodes/M900';
import * as M906 from './gcodes/M906';
import * as M907 from './gcodes/M907';
import * as M908 from './gcodes/M908';
import * as M909 from './gcodes/M909';
import * as M910 from './gcodes/M910';
import * as M911 from './gcodes/M911';
import * as M912 from './gcodes/M912';
import * as M913 from './gcodes/M913';
import * as M914 from './gcodes/M914';
import * as M915 from './gcodes/M915';
import * as M916 from './gcodes/M916';
import * as M917 from './gcodes/M917';
import * as M918 from './gcodes/M918';
import * as M928 from './gcodes/M928';
import * as M951 from './gcodes/M951';
import * as M993 from './gcodes/M993';
import * as M995 from './gcodes/M995';
import * as M997 from './gcodes/M997';
import * as M999 from './gcodes/M999';
import * as T001T002 from './gcodes/T001-T002';
import * as Tx from './gcodes/Tx';
import * as Tc from './gcodes/Tc';
export async function resolveGcodeTooltip(gcode: string): Promise<string | undefined> {
    switch (gcode.toLowerCase()) {
        case "g0":
        case "g1":
            return G000G001.default;
        case "g2":
        case "g3":
            return G002G003.default;
        case "g4":
            return G004.default;
        case "g5":
            return G005.default;
        case "g6":
            return G006.default;
        case "g10":
            return G010.default;
        case "g11":
            return G011.default;
        case "g12":
            return G012.default;
        case "g17":
        case "g18":
        case "g19":
            return G017G019.default;
        case "g20":
            return G020.default;
        case "g21":
            return G021.default;
        case "g26":
            return G026.default;
        case "g27":
            return G027.default;
        case "g28":
            return G028.default;
        case "g29":
            return G029.default;
        case "g30":
            return G030.default;
        case "g31":
            return G031.default;
        case "g32":
            return G032.default;
        case "g33":
            return G033.default;
        case "g34":
            return G034.default;
        case "g35":
            return G035.default;
        case "g38":
        case "g38.2":
        case "g38.3":
        case "g38.4":
        case "g38.5":
            return G038.default;
        case "g42":
            return G042.default;
        case "g53":
            return G053.default;
        case "g54":
        case "g55":
        case "g56":
        case "g57":
        case "g58":
        case "g59":
        case "g59.1":
        case "g59.2":
        case "g59.3":
            return G054G059.default;
        case "g60":
            return G060.default;
        case "g61":
            return G061.default;
        case "g76":
            return G076.default;
        case "g80":
            return G080.default;
        case "g90":
            return G090.default;
        case "g91":
            return G091.default;
        case "g92":
            return G092.default;
        case "g425":
            return G425.default;
        case "m0":
        case "m1":
            return M000M001.default;
        case "m3":
            return M003.default;
        case "m4":
            return M004.default;
        case "m5":
            return M005.default;
        case "m7":
        case "m8":
        case "m9":
            return M007M009.default;
        case "m10":
        case "m11":
            return M010M011.default;
        case "m16":
            return M016.default;
        case "m17":
            return M017.default;
        case "m18":
        case "m84":
            return M018.default;
        case "m20":
            return M020.default;
        case "m21":
            return M021.default;
        case "m22":
            return M022.default;
        case "m23":
            return M023.default;
        case "m24":
            return M024.default;
        case "m25":
            return M025.default;
        case "m26":
            return M026.default;
        case "m27":
            return M027.default;
        case "m28":
            return M028.default;
        case "m29":
            return M029.default;
        case "m30":
            return M030.default;
        case "m31":
            return M031.default;
        case "m32":
            return M032.default;
        case "m33":
            return M033.default;
        case "m34":
            return M034.default;
        case "m42":
            return M042.default;
        case "m43t":
            return M043T.default;
        case "m43":
            return M043.default;
        case "m48":
            return M048.default;
        case "m73":
            return M073.default;
        case "m75":
            return M075.default;
        case "m76":
            return M076.default;
        case "m77":
            return M077.default;
        case "m78":
            return M078.default;
        case "m80":
            return M080.default;
        case "m81":
            return M081.default;
        case "m82":
            return M082.default;
        case "m83":
            return M083.default;
        case "m85":
            return M085.default;
        case "m92":
            return M092.default;
        case "m100":
            return M100.default;
        case "m104":
            return M104.default;
        case "m105":
            return M105.default;
        case "m106":
            return M106.default;
        case "m107":
            return M107.default;
        case "m108":
            return M108.default;
        case "m109":
            return M109.default;
        case "m110":
            return M110.default;
        case "m111":
            return M111.default;
        case "m112":
            return M112.default;
        case "m113":
            return M113.default;
        case "m114":
            return M114.default;
        case "m115":
            return M115.default;
        case "m117":
            return M117.default;
        case "m118":
            return M118.default;
        case "m119":
            return M119.default;
        case "m120":
            return M120.default;
        case "m121":
            return M121.default;
        case "m122":
            return M122.default;
        case "m125":
            return M125.default;
        case "m126":
            return M126.default;
        case "m127":
            return M127.default;
        case "m128":
            return M128.default;
        case "m129":
            return M129.default;
        case "m140":
            return M140.default;
        case "m141":
            return M141.default;
        case "m143":
            return M143.default;
        case "m145":
            return M145.default;
        case "m149":
            return M149.default;
        case "m150":
            return M150.default;
        case "m154":
            return M154.default;
        case "m155":
            return M155.default;
        case "m163":
            return M163.default;
        case "m164":
            return M164.default;
        case "m165":
            return M165.default;
        case "m166":
            return M166.default;
        case "m190":
            return M190.default;
        case "m191":
            return M191.default;
        case "m192":
            return M192.default;
        case "m193":
            return M193.default;
        case "m200":
            return M200.default;
        case "m201":
            return M201.default;
        case "m203":
            return M203.default;
        case "m204":
            return M204.default;
        case "m205":
            return M205.default;
        case "m206":
            return M206.default;
        case "m207":
            return M207.default;
        case "m208":
            return M208.default;
        case "m209":
            return M209.default;
        case "m211":
            return M211.default;
        case "m217":
            return M217.default;
        case "m218":
            return M218.default;
        case "m220":
            return M220.default;
        case "m221":
            return M221.default;
        case "m226":
            return M226.default;
        case "m240":
            return M240.default;
        case "m250":
            return M250.default;
        case "m256":
            return M256.default;
        case "m260":
            return M260.default;
        case "m261":
            return M261.default;
        case "m280":
            return M280.default;
        case "m281":
            return M281.default;
        case "m282":
            return M282.default;
        case "m290":
            return M290.default;
        case "m300":
            return M300.default;
        case "m301":
            return M301.default;
        case "m302":
            return M302.default;
        case "m303":
            return M303.default;
        case "m304":
            return M304.default;
        case "m305":
            return M305.default;
        case "m350":
            return M350.default;
        case "m351":
            return M351.default;
        case "m355":
            return M355.default;
        case "m360":
            return M360.default;
        case "m361":
            return M361.default;
        case "m362":
            return M362.default;
        case "m363":
            return M363.default;
        case "m364":
            return M364.default;
        case "m380":
            return M380.default;
        case "m381":
            return M381.default;
        case "m400":
            return M400.default;
        case "m401":
            return M401.default;
        case "m402":
            return M402.default;
        case "m403":
            return M403.default;
        case "m404":
            return M404.default;
        case "m405":
            return M405.default;
        case "m406":
            return M406.default;
        case "m407":
            return M407.default;
        case "m410":
            return M410.default;
        case "m412":
            return M412.default;
        case "m413":
            return M413.default;
        case "m420":
            return M420.default;
        case "m421":
            return M421.default;
        case "m422":
            return M422.default;
        case "m425":
            return M425.default;
        case "m428":
            return M428.default;
        case "m430":
            return M430.default;
        case "m486":
            return M486.default;
        case "m500":
            return M500.default;
        case "m501":
            return M501.default;
        case "m502":
            return M502.default;
        case "m503":
            return M503.default;
        case "m504":
            return M504.default;
        case "m510":
            return M510.default;
        case "m511":
            return M511.default;
        case "m512":
            return M512.default;
        case "m524":
            return M524.default;
        case "m540":
            return M540.default;
        case "m569":
            return M569.default;
        case "m575":
            return M575.default;
        case "m600":
            return M600.default;
        case "m603":
            return M603.default;
        case "m605":
            return M605.default;
        case "m665":
            return M665.default;
        case "m666":
            return M666.default;
        case "m672":
            return M672.default;
        case "m701":
            return M701.default;
        case "m702":
            return M702.default;
        case "m710":
            return M710.default;
        case "m7219":
            return M7219.default;
        case "m808":
            return M808.default;
        case "m810":
        case "m811":
        case "m812":
        case "m813":
        case "m814":
        case "m815":
        case "m816":
        case "m817":
        case "m818":
        case "m819":
            return M810M819.default;
        case "m851":
            return M851.default;
        case "m852":
            return M852.default;
        case "m860":
        case "m861":
        case "m862":
        case "m863":
        case "m864":
        case "m865":
        case "m866":
        case "m867":
        case "m868":
        case "m869":
            return M860M869.default;
        case "m871":
            return M871.default;
        case "m876":
            return M876.default;
        case "m900":
            return M900.default;
        case "m906":
            return M906.default;
        case "m907":
            return M907.default;
        case "m908":
            return M908.default;
        case "m909":
            return M909.default;
        case "m910":
            return M910.default;
        case "m911":
            return M911.default;
        case "m912":
            return M912.default;
        case "m913":
            return M913.default;
        case "m914":
            return M914.default;
        case "m915":
            return M915.default;
        case "m916":
            return M916.default;
        case "m917":
            return M917.default;
        case "m918":
            return M918.default;
        case "m928":
            return M928.default;
        case "m951":
            return M951.default;
        case "m993":
        case "m994":
            return M993.default;
        case "m995":
            return M995.default;
        case "m997":
            return M997.default;
        case "m999":
            return M999.default;
        case "t0":
        case "t1":
        case "t2":
        case "t3":
        case "t4":
        case "t5":
        case "t6":
            return T001T002.default;
        case "tx":
        case "t?":
            return Tx.default;
        case "tc":
            return Tc.default;
}
}