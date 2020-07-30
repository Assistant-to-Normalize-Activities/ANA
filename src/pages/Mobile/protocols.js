import React from "react";

import { Description, Button } from "../../components";
import {
	ProtocolsContainer,
	Card,
	CardContainer,
	ProtocolImage,
	ProtocolTitle,
	ProtocolDescription,
	ProtocolLink
} from "../../components/Protocols";

function Protocols() {
	return (
		<ProtocolsContainer>
			<ProtocolTitle style={{ margin: "6em 0 2em 0" }}>
				Shopping Garden
			</ProtocolTitle>
			<Description primary="true">
				Aqui estão os principais protocolos de segurança deste local
			</Description>
			<Card>
				<ProtocolImage src="/images/Alcohol in Gel.svg" alt="Higiene pessoal" />
				<CardContainer>
					<ProtocolTitle>Higiene pessoal</ProtocolTitle>
					<ProtocolDescription terciary="true">
						Utilizar álcool em gel disponível na entrada e nos locais de
						pagamento.
					</ProtocolDescription>
				</CardContainer>
			</Card>
			<Card>
				<ProtocolImage
					src="/images/Social Distance.svg"
					alt="Distanciamento social"
				/>
				<CardContainer>
					<ProtocolTitle>Distanciamento social</ProtocolTitle>
					<ProtocolDescription terciary="true">
						Manter o distanciamento de pelo menos 1,5 metro entre os clientes
					</ProtocolDescription>
				</CardContainer>
			</Card>
			<Card>
				<ProtocolImage src="/images/Protection.svg" alt="Proteção" />
				<CardContainer>
					<ProtocolTitle>Proteção</ProtocolTitle>
					<ProtocolDescription terciary="true">
						Uso obrigatório de máscara em todos os ambientes.
					</ProtocolDescription>
				</CardContainer>
			</Card>
			<Button to="/chat">Ok! Entendi :)</Button>
			<ProtocolLink to="/chat">Não entendi :(</ProtocolLink>
		</ProtocolsContainer>
	);
}

export default Protocols;
