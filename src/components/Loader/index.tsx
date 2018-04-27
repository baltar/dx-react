import React, { ReactElement } from 'react'

interface LoaderProps {
  reSize?: number;
  hasData: any;
  message?: string;
  render(): ReactElement<any>;
}

class Loader extends React.Component<LoaderProps> {
  static defaultProps = {
    reSize: 1,
  }

  renderSVG = () =>
    <div className="svgContainer" style={{ width: `${420 * this.props.reSize}px`, height: `${475 * this.props.reSize}px` }}>
      <svg width="100%" height="100%" viewBox="0 0 105 20.5" version="1.1">
        <defs>
          <polygon id="path-1" points="0.0804697719 0.0481072691 18.8121496 0.0481072691 18.8121496 19.3882033 0.0804697719 19.3882033"></polygon>
          <polygon id="path-3" points="0 0.166758882 7.75290678 0.166758882 7.75290678 14.1836979 0 14.1836979"></polygon>
        </defs>

        <g id="Page-1" className="svgGroup" fillRule="evenodd">
          <g id="dutchx_logo" transform="translate(0.000000, -4.000000)">
            <g transform="translate(0.666667, 4.282353)" id="v2">
              <g>
                <path d="M44.2734712,17.4119878 C43.0158724,17.4119878 42.0438496,17.0337517 41.3575999,16.2765005 C40.670956,15.5196387 40.3276341,14.4768601 40.3276341,13.1485541 L40.3276341,5.71432555 L43.6228939,5.71432555 L43.6228939,12.1201882 C43.6228939,12.8914627 43.7965257,13.4734243 44.1433952,13.8662678 C44.4902646,14.2593062 44.9814003,14.455241 45.6173933,14.455241 C46.2531892,14.455241 46.7555587,14.2593062 47.1243046,13.8662678 C47.4926563,13.4734243 47.6771278,12.8914627 47.6771278,12.1201882 L47.6771278,5.71432555 L50.9721905,5.71432555 L50.9721905,17.1975501 L47.6771278,17.1975501 L47.6771278,15.5694989 C47.4889117,15.8125672 47.283155,16.0445338 47.0592665,16.2655935 C46.8347868,16.4874323 46.5854744,16.683562 46.3113293,16.8549563 C46.0363958,17.0265454 45.7330821,17.1622975 45.4005999,17.261823 C45.0679205,17.3617381 44.6922767,17.4119878 44.2734712,17.4119878" id="Fill-1" ></path>
                <path d="M57.8442459,17.3904856 C57.338329,17.3904856 56.8795153,17.3369249 56.4678049,17.2299982 C56.0558974,17.122682 55.7013416,16.9335639 55.4053201,16.6620598 C55.1089044,16.3909451 54.8775267,16.0374443 54.7115812,15.6015574 C54.5454386,15.16606 54.4622688,14.6127291 54.4622688,13.9411749 L54.4622688,8.49940532 L53.074988,8.49940532 L53.074988,5.71444241 L54.4622688,5.71444241 L54.4622688,2.77911993 L57.7577257,2.77911993 L57.7577257,5.71444241 L60.4891255,5.71444241 L60.4891255,8.49940532 L57.7577257,8.49940532 L57.7577257,13.4055677 C57.7577257,14.1484063 58.1114931,14.5196308 58.8198163,14.5196308 C59.3978663,14.5196308 59.9398499,14.3840735 60.4457669,14.1125693 L60.4457669,16.7263326 C60.0988974,16.9265524 59.7157643,17.0872345 59.2967618,17.2083792 C58.8773651,17.3297185 58.3935216,17.3904856 57.8442459,17.3904856" id="Fill-3" ></path>
                <path d="M68.0768752,17.454778 C67.2097015,17.454778 66.4040184,17.2974068 65.6594316,16.9834436 C64.9150418,16.6694804 64.2755013,16.2443056 63.741007,15.7086983 C63.2061185,15.1730911 62.787116,14.5447751 62.4836052,13.8233608 C62.1800944,13.1021413 62.0285361,12.3343727 62.0285361,11.5202497 L62.0285361,11.4775959 C62.0285361,10.6634728 62.1800944,9.89200364 62.4836052,9.16357779 C62.787116,8.43495716 63.2061185,7.79982435 63.741007,7.25701075 C64.2755013,6.71419715 64.9150418,6.28571136 65.6594316,5.9713586 C66.4040184,5.65739537 67.2238916,5.50002422 68.1204309,5.50002422 C69.2185881,5.50002422 70.1289233,5.67141854 70.8518308,6.01420718 C71.5743441,6.35699581 72.2103371,6.82813542 72.7596128,7.42821031 L70.743237,9.57063929 C70.3675932,9.18500208 69.9807155,8.87805043 69.5835894,8.64939483 C69.185872,8.42112876 68.6907947,8.30660619 68.0983574,8.30660619 C67.6791578,8.30660619 67.2997693,8.38899232 66.960192,8.55298552 C66.6206147,8.71736826 66.324199,8.9423233 66.071339,9.22785066 C65.8184791,9.51396231 65.623365,9.8460388 65.4861939,10.2240801 C65.3486286,10.602511 65.2804373,11.0062615 65.2804373,11.4345525 L65.2804373,11.4775959 C65.2804373,11.9202996 65.3486286,12.3343727 65.4861939,12.7198151 C65.623365,13.1056471 65.8224208,13.4416189 66.0823758,13.7269515 C66.3423308,14.0128684 66.6529366,14.2376287 67.0143904,14.4018167 C67.3754499,14.5661994 67.7804594,14.648196 68.2286305,14.648196 C68.7779062,14.648196 69.2582022,14.5377635 69.6701096,14.3161195 C70.0824113,14.094865 70.4903771,13.7988203 70.8953866,13.4270115 L72.8246508,15.3553923 C72.260988,15.9694904 71.6178999,16.4729612 70.8953866,16.86561 C70.1724791,17.2582588 69.2327782,17.454778 68.0768752,17.454778" id="Fill-5" ></path>
                <path d="M85.6153043,9.76341895 C85.6153043,8.43511298 85.2717853,7.39272389 84.5853385,6.63547263 C83.8988918,5.87880566 82.9268689,5.49998527 81.6694672,5.49998527 C81.2502676,5.49998527 80.8746237,5.55023496 80.5423385,5.65015006 C80.2096592,5.75025992 79.9061484,5.88562248 79.6318062,6.05721157 C79.3570698,6.22860589 79.1075603,6.42493029 78.8838689,6.64637954 C78.6595863,6.86782879 78.4536326,7.09979542 78.2660077,7.34247419 L78.2660077,1.5581107 L74.9707479,1.5581107 L74.9707479,17.1976475 L78.2660077,17.1976475 L78.2660077,10.7917849 C78.2660077,10.0205104 78.4502821,9.43874357 78.8188309,9.04570524 C79.1873797,8.65305643 79.689355,8.45673203 80.3255451,8.45673203 C80.9613411,8.45673203 81.4528708,8.65305643 81.7997403,9.04570524 C82.1464127,9.43874357 82.3198474,10.0205104 82.3198474,10.7917849 L82.3198474,16.7056679 L85.6153043,12.080748 L85.6153043,9.76341895 Z" id="Fill-7" ></path>
                <path d="M37.206144,6.7104966 C36.8159159,5.8038596 36.2630927,5.01466667 35.5474774,4.34311257 C34.8320591,3.67194799 33.9792727,3.14705289 32.9893151,2.76862203 C31.9991605,2.38999639 30.9116459,2.20068358 29.7265743,2.20068358 L23.8083113,2.20068358 L23.8083113,5.20008416 L27.1467328,5.20008416 L27.7218266,5.20008416 L29.7265743,5.20008416 C30.405926,5.20008416 31.0273348,5.3107114 31.5911947,5.53079729 C32.1546605,5.75107794 32.6351535,6.06056155 33.0326738,6.45846904 C33.429997,6.85637653 33.7406029,7.33258007 33.9650826,7.88688488 C34.188774,8.44118968 34.3011124,9.04535466 34.3011124,9.69918503 L34.3011124,9.74164408 C34.3011124,10.4098872 34.188774,11.0142469 33.9650826,11.5543338 C33.7406029,12.0948102 33.429997,12.5638074 33.0326738,12.9619096 C32.6351535,13.3598171 32.1546605,13.6654054 31.5911947,13.8786745 C31.0273348,14.0917488 30.405926,14.1982859 29.7265743,14.1982859 L27.1467328,14.1982859 L27.1467328,8.12157823 L23.8083113,8.12157823 L23.8083113,17.1976865 L29.7265743,17.1976865 C30.9116459,17.1976865 31.9991605,17.0046731 32.9893151,16.6192307 C33.9792727,16.2337882 34.8320591,15.7053873 35.5474774,15.0338332 C36.2630927,14.3626686 36.8159159,13.5701647 37.206144,12.655737 C37.5961751,11.7418937 37.7912892,10.7561816 37.7912892,9.69918503 L37.7912892,9.65633645 C37.7912892,8.59953466 37.5961751,7.61771789 37.206144,6.7104966" id="Fill-9" ></path>
                <g id="Group-13" transform="translate(84.746515, 0.146659)">
                  <g id="Clip-12"></g>
                  <polygon id="Fill-11" mask="url(#mask-2)" points="18.5323481 0.0481072691 11.9903113 9.4973877 18.8122087 19.3882033 13.7796453 19.3882033 9.39017003 12.7573856 4.97310285 19.3882033 0.0804697719 19.3882033 6.90197294 9.55231179 0.359936185 0.0481072691 5.39230247 0.0481072691 9.4741282 6.31997074 13.6399121 0.0481072691"></polygon>
                </g>
                <path d="M10.8275497,8.98188033 L10.8275497,8.98226986 C13.0686023,11.2516865 15.1151321,13.9170629 16.3415916,16.8623184 C17.730449,15.355217 18.5804762,13.3537988 18.5804762,11.1587829 L18.5804762,2.84537941 C16.5832177,3.9535995 12.5601233,6.40064293 10.8275497,8.98188033" id="Fill-14" ></path>
                <path d="M3.52462725,17.998098 C4.93949987,19.0202313 6.68508099,19.6232277 8.56842446,19.6232277 L8.5692128,19.6232277 L9.29014943,19.6232277 L10.0112831,19.6232277 L10.0120715,19.6232277 C11.895415,19.6232277 13.6409961,19.0202313 15.0558687,17.998098 C13.9035132,14.9137793 11.6991184,12.1071973 9.29014943,9.74273477 C6.88137757,12.1071973 4.67698276,14.9137793 3.52462725,17.998098" id="Fill-16" ></path>
                <path d="M9.29012972,8.23181594 C9.29012972,8.23181594 11.2536868,6.00271597 12.2422647,5.17437501 C11.9815214,3.36012719 10.3492641,1.31508134 9.29012972,0.213093778 C8.23119246,1.31508134 6.59893517,3.36012719 6.33819183,5.17437501 C7.32676977,6.00271597 9.29012972,8.23181594 9.29012972,8.23181594" id="Fill-18" ></path>
                <g id="Group-22" transform="translate(0.000000, 2.678621)">
                  <g id="Clip-21"></g>
                  <path d="M7.75290678,6.3032598 C6.02013619,3.7220224 1.99723885,1.27497897 -1.97084918e-05,0.166758882 L-1.97084918e-05,8.48016242 C-1.97084918e-05,10.6751783 0.850007541,12.6765965 2.23886496,14.1836979 C3.4653244,11.2384424 5.51185418,8.57306593 7.75290678,6.30364933 L7.75290678,6.3032598 Z" id="Fill-20" mask="url(#mask-4)"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      {!!(this.props.message) && <p>{this.props.message}</p>}
    </div>

  render() {
    const { hasData } = this.props

    return hasData ? this.props.render() : this.renderSVG()
  }
}

export default Loader