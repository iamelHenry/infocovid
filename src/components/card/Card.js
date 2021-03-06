import * as React from 'react';
import {
  Card,
  Title,
  Paragraph,
  DataTable,
  Subheading,
  IconButton,
  Colors } from 'react-native-paper';

const TotalCaseCardComponent = ({ options }) => {
  return (
    <Card>
      <Card.Content>
        <Title>{options.title}</Title>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>A</DataTable.Title>
            <DataTable.Title>B</DataTable.Title>
            <DataTable.Title>B</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell numeric>10</DataTable.Cell>
            <DataTable.Cell numeric>11</DataTable.Cell>
            <DataTable.Cell numeric>12</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </Card.Content>
    </Card>
  );
}

export const TableCardComponent = ({ options }) => {
  return (
    <Card style={{
      border: "solid 1px",
      borderRadius: 10
    }}>
      <Card.Content>
        <Card.Title
          title={options.title}
          subtitle={options.subtitle}
          />
        <DataTable>
          <DataTable.Header>
            {
              options.content.headers.map(
                (header, index) => <DataTable.Title key={index} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{header}</DataTable.Title>
              )
            }
          </DataTable.Header>
          {
            options.content.data.map(
              (row, index) => (<DataTable.Row key={index}>{
                row.map(
                  (cell, index) => (<DataTable.Cell key={index} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{cell}</DataTable.Cell>)
                )
              }</DataTable.Row>)
            )
          }
        </DataTable>
        <Card.Title
          subtitle={options.content.footer}
          subtitleStyle={{ textAlign: "right" }}
        />
      </Card.Content>
    </Card>
  );
}

export const LocationCardItem = ({ options, onPress, onPressFav }) => {
  const [favIcon, setFavIcon] = React.useState(options.isFav);
  const setFav = () => {
    setFavIcon(!favIcon);
    onPressFav();
  }

  const cardItem = (
    <Card
      style={{
        border: "solid 1px",
        borderRadius: 10,
      }}
      onPress={onPress}
      key={options.key}
      >
      <Card.Content>
        <Card.Title
          key={options.key.concat('-title')}
          title={options.title}
          subtitle={options.subtitle}
          />
        <DataTable>
          <DataTable.Header>
          {
            options.content.headers.map(
              (header, index) => (
                <DataTable.Title key={options.key.concat('-header-', index)} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{header}</DataTable.Title>
                )
            )
          }
          </DataTable.Header>
          {
            options.content.data.map(
              (row, index) => (<DataTable.Row key={options.key.concat('-row-',index)}>{
                row.map(
                  (cell, index) => (
                    <DataTable.Cell key={options.key.concat('-cell-',index)} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{cell}</DataTable.Cell>
                    )
                )
              }</DataTable.Row>)
            )
          }
        </DataTable>
        <Card.Title
          subtitle={options.footer}
          subtitleStyle={{ textAlign: "right" }}
        />
      </Card.Content>
      <Card.Actions style={{ direction:"rtl"}}>
        <IconButton
          icon={(favIcon)? 'star': 'star-outline'}
          color={Colors.red500}
          size={20}
          onPress={setFav}></IconButton>
      </Card.Actions>
    </Card>
  );
  return cardItem;
}

export const FaseCard = (data) => {
  let msjPhase = '';
  switch(parseInt(data.phase)) {
    case 1:
      msjPhase = 'Cuarentena';
      break;
    case 2:
      msjPhase = 'Transicion';
      break;
    case 3:
      msjPhase = 'Preparacion';
      break;
    case 4:
      msjPhase = 'Apertura Inicial';
      break;
    default:
      msjPhase = 'Desconocido';
      break;
  };
  const paragraph = `Fase ${data.phase} : ${msjPhase}`;
  return (
    <Card style={{
        border: "solid 1px",
        borderRadius: 10
      }}>
      <Card.Content>
        <Title>Plan paso a paso</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Card.Content>
    </Card>
  );
}
