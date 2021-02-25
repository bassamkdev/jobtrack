import axios from "axios";

async function getOne(req, res) {
  try {
    const { data: job } = await axios.get(
      `https://jobs.github.com/positions/${req.params.id}.json`
    );
    if (!job) {
      return res.status(400).end();
    }
    res.status(200).json({ data: job });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

async function getMany(req, res) {
  try {
    const { data: jobs } = await axios.get(
      `https://jobs.github.com/positions.json?location=${
        req.body.location || ""
      }&description=${req.body.description || ""}&markdown=true`
    );
    if (!jobs) {
      return res.status(400).end();
    }
    res.status(200).json({ data: jobs });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export { getOne, getMany };
