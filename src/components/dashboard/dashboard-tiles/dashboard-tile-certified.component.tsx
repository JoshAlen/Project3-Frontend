import * as React from 'react';
import {Card, CardBody, Col} from 'reactstrap';




export default class CertifiedAssociatesTile extends React.Component {

    // displays total number of associates with certifications

    
    public render() {
        return (
   
                <Col md={12} xl={3} lg={6} xs={12}>
                    <Card>
                        <CardBody>
                            <h5>Certified</h5>
                        </CardBody>
                    </Card>
                </Col>
   
        )
    }
}