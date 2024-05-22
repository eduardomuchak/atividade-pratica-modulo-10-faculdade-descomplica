import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Card, CardHeader, CardContent, Button, Box } from "@mui/material";

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [inicioTarefa, setInicioTarefa] = useState("");
  const [fimTarefa, setFimTarefa] = useState("");
  const [recursoTarefa, setRecursoTarefa] = useState("");
  const [statusTarefa, setStatusTarefa] = useState("");

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map((tarefa) => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRecurso = ({ target: { value } }) => {
    setRecursoTarefa(value);
  };

  const handleStatus = ({ target: { value } }) => {
    setStatusTarefa(value);
  };

  const handleSalvar = () => {
    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
  };

  return (
    <Box sx={style}>
      <Card>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent>
          <Box mb={2}>
            <TextField
              fullWidth
              id="tarefa_titulo"
              label="Título da Tarefa"
              value={tituloTarefa}
              onChange={(e) => setTituloTarefa(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="tarefa_descricao"
              label="Descrição da Tarefa"
              value={descricaoTarefa}
              onChange={(e) => setDescricaoTarefa(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="tarefa_inicio"
              label="Início da Tarefa"
              type="date"
              value={inicioTarefa}
              onChange={(e) => setInicioTarefa(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="tarefa_fim"
              label="Fim da Tarefa"
              type="date"
              value={fimTarefa}
              onChange={(e) => setFimTarefa(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel id="tarefa_recurso">Recurso</InputLabel>
              <Select
                labelId="tarefa_recurso"
                id="tarefa_recurso"
                value={recursoTarefa}
                onChange={handleRecurso}
              >
                <MenuItem value={"Recurso 1"}>Recurso 1</MenuItem>
                <MenuItem value={"Recurso 2"}>Recurso 2</MenuItem>
                <MenuItem value={"Recurso 3"}>Recurso 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel id="tarefa_status">Status</InputLabel>
              <Select
                labelId="tarefa_status"
                id="tarefa_status"
                value={statusTarefa}
                onChange={handleStatus}
              >
                <MenuItem value={"Aguardando"}>Aguardando</MenuItem>
                <MenuItem value={"Em Andamento"}>Em Andamento</MenuItem>
                <MenuItem value={"Concluída"}>Concluída</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mt={2}>
            <Button variant="contained" onClick={handleSalvar}>
              Salvar
            </Button>
            <Button variant="outlined" onClick={handleClose} sx={{ ml: 2 }}>
              Cancelar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  p: 4,
};

export default CriarTarefa;
