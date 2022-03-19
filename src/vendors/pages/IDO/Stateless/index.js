import { Grid, Zoom } from "@material-ui/core";
import PageLayout from "../../../../layout/PageLayout";
import layout from "./config/layout";
import "./index.scss";

export default ({ address, connect }) => {
  return (
    <PageLayout layout={layout}>
      <div key="m1" className="stake-view">
        <Zoom in={true}>
          <div className="stake-card">
            <Grid
              className="stake-card-grid"
              container
              direction="column"
              spacing={2}
            >
              <Grid item>
                <div className="stake-card-header">
                  <p className="stake-card-header-title">ONE IDO round 1 </p>
                </div>
              </Grid>

              <Grid item></Grid>

              <div className="stake-card-area">
                <div className="stake-card-wallet-notification">
                  <div
                    className="stake-card-wallet-connect-btn"
                    onClick={connect}
                  >
                    <p>Connect Wallet</p>
                  </div>
                  <p className="stake-card-wallet-desc-text">
                    Connect your wallet to join IDO!
                  </p>
                </div>
              </div>
            </Grid>
          </div>
        </Zoom>
      </div>
    </PageLayout>
  );
};
