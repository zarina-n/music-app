import styled from "styled-components";

function Volume() {
  return (
    <BarVolumeBlock>
      <VolumeContent>
        <VolumeImage>
          <svg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </VolumeImage>
        <VolumeProgress>
          <input type="range" name="range" />
        </VolumeProgress>
      </VolumeContent>
    </BarVolumeBlock>
  );
}

export default Volume;

const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
  justify-content: end;
`;

const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;

  svg {
    width: 13px;
    height: 18px;
    fill: transparent;
  }
`;

const VolumeProgress = styled.div`
  width: 109px;

  input {
    width: 109px;
  }
`;
